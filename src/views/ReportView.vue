<template>
    <div class="card-body">
      <header class="header">
        <!-- <div class="logo">
          <img :src="logo" alt="Logo" />
        </div> -->
        <div class="summary" v-for="(value, key) in taskSummary" :key="key">
          {{ key }}
          <br />
          <span class="summary-count">{{ value }}</span>
        </div>
      </header>
      <main class="main">
        <div class="charts">
          <div class="chart-primary-group chart-container">
            <canvas ref="issuesByStatusChart"></canvas>
          </div>
          <div class="chart-secondary-group">
            <div class="chart-secondary-item chart-container">
              <canvas ref="priorityBreakdownChart"></canvas>
            </div>
            <div class="chart-secondary-item chart-container">
              <canvas ref="issuesByAssigneeChart"></canvas>
            </div>
          </div>
        </div>
        <div class="tasks">
          <table class="tasks-table">
            <thead>
              <tr>
                <th>Code</th>
                <th>Assignee</th>
                <th>Priority</th>
                <th>Summary</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="task in tasks" :key="task.code">
                <td>{{ task.code }}</td>
                <td>{{ task.assignee }}</td>
                <td>
                  <i :class="getPriorityIcon(task)"></i>
                  {{ task.priority }}
                </td>
                <td>{{ task.summary }}</td>
                <td>
                  <i :class="getStatusIcon(task)"></i>
                  {{ task.status }}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  import Chart from '@/assets/js/chart.js';
  import axios from 'axios';
  import tasksData from '@/api/tasks.json';
  
  const logo = ref('images/logo.png');
  const tasks = ref(tasksData);
  const issuesByStatusChart = ref(null);
  const priorityBreakdownChart = ref(null);
  const issuesByAssigneeChart = ref(null);
  
  const taskSummary = ref({
    Unresolved: 0,
    Resolved: 0,
    'In Progress': 0,
    'In Review': 0,
  });

  const fetchTasks = async () => {
    try {
    //   const response = await axios.get('src/api/tasks.json');
    //   tasks.value = response.data;
    console.log('tasks:', tasks.value);
      updateTaskSummary();
      renderCharts();
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };
  
  const updateTaskSummary = () => {
    taskSummary.value = tasks.value.reduce((acc, task) => { 
      acc[task.status] = (acc[task.status] || 0) + 1;
      return acc;
    }, {});
  };
  
  const renderCharts = () => {
    if (!issuesByStatusChart.value || !priorityBreakdownChart.value || !issuesByAssigneeChart.value) return;
  
    new Chart(issuesByStatusChart.value.getContext('2d'), {
      type: 'doughnut',
      data: getDatasetForIssuesByStatus(),
    });
  
    new Chart(priorityBreakdownChart.value.getContext('2d'), {
      type: 'bar',
      data: getDatasetForIssuesPriority(),
    });
  
    new Chart(issuesByAssigneeChart.value.getContext('2d'), {
      type: 'bar',
      data: getDatasetForIssuesByAssignee(),
    });
  };
  
  const getDatasetForIssuesByStatus = () => {
    const statuses = Object.keys(taskSummary.value);
    return {
      labels: statuses,
      datasets: [{
        data: statuses.map(status => taskSummary.value[status]),
        backgroundColor: ['#F6C33E', '#D04336', '#8EB11E', '#3573B0'],
      }],
    };
  };
  
  const getDatasetForIssuesPriority = () => {
    const priorities = tasks.value.reduce((acc, task) => {
      acc[task.priority] = (acc[task.priority] || 0) + 1;
      return acc;
    }, {});
    return {
      labels: Object.keys(priorities),
      datasets: [{
        data: Object.values(priorities),
        backgroundColor: '#D14336',
      }],
    };
  };
  
  const getDatasetForIssuesByAssignee = () => {
    const assignees = tasks.value.reduce((acc, task) => {
      acc[task.assignee] = (acc[task.assignee] || 0) + 1;
      return acc;
    }, {});
    return {
      labels: Object.keys(assignees),
      datasets: [{
        data: Object.values(assignees),
        backgroundColor: '#3573B0',
      }],
    };
  };
  
  const getPriorityIcon = (task) => {
    return task.priority === 'High' ? 'fa fa-exclamation-circle' : 'fa fa-check-circle';
  };
  
  const getStatusIcon = (task) => {
    return task.status === 'Resolved' ? 'fa fa-check' : 'fa fa-clock';
  };
  
  onMounted(fetchTasks);
  </script>
  
  <style>
  @import 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
  @import '@/assets/styles/style.css';
  </style>
  