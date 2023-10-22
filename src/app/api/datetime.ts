
   
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
       const datetime=`${month}/${date}/${year} ${hours}:${minutes}`;
    export default datetime