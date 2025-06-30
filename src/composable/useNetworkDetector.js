import { ref } from "vue";

export default function useNetworkDetector() {
    const isOnline = ref(window.navigator.onLine);
    
    window.addEventListener('online', () => isOnline.value = true);
    window.addEventListener('offline', () => isOnline.value = false);
    
    return { isOnline };
}
