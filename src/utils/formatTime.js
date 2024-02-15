export const formatTime = timestamp => {
    const timestampDt = new Date(timestamp);
    const currentTime = new Date();
    const timeDifference = currentTime - timestampDt;

    const minute = 60 * 1000;
    const hour = 60 * minute;
    const day = 24 * hour;

    if (timeDifference < minute) {
        const seconds = Math.floor(timeDifference / 1000);
        return `${seconds} second${seconds > 1 ? 's' : ''} ago`;
    } else if (timeDifference < hour) {
        const minutes = Math.floor(timeDifference / minute);
        return `${minutes} minute${minutes > 1 ? 's' : ''} ago`;
    } else if (timeDifference < day) {
        const hours = Math.floor(timeDifference / hour);
        return `${hours} hour${hours > 1 ? 's' : ''} ago`;
    } else {
        const options = { day: 'numeric', month: 'short', year: 'numeric' };
        return timestampDt.toLocaleDateString('en-US', options);
    }
}