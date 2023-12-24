function currenttime()
{
    const currentdate= new Date();
    const hours=currentdate.getHours();
    const minutes=currentdate.getMinutes();
    const seconds=currentdate.getSeconds();
    console.log(hours + ":" + minutes + ":" + seconds);
}
setInterval(currenttime,1000);