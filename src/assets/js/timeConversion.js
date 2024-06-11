export function timeConversion(epochMicroseconds) {
    // Convert microseconds to milliseconds (JavaScript uses milliseconds)
    let epochMilliseconds = epochMicroseconds / 1000;
    
    // Create a Date object
    let date = new Date(epochMilliseconds);

    // Get date components
    let day = String(date.getDate()).padStart(2, '0');
    let month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    let year = date.getFullYear();

    // Get time components
    let hours = String(date.getHours()).padStart(2, '0');
    let minutes = String(date.getMinutes()).padStart(2, '0');
    let seconds = String(date.getSeconds()).padStart(2, '0');

    // Format date and time
    let formattedDate = `${day}/${month}/${year}`;
    let formattedTime = `${hours}:${minutes}:${seconds}`;

    // Return the result as an object
    return {
        date: formattedDate,
        time: formattedTime
    };
}
