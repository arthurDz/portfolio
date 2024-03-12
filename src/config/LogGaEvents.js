import { logEvent } from "firebase/analytics";
import { analytics } from "./firebaseConfig";


export const logCustomEvent = async (eventName) => {
    const analyticsInstance = await analytics;
    if (analyticsInstance) {
        logEvent(analyticsInstance, eventName);
    } else {
        console.error('Analytics not initialized');
    }
};