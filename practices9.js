const body=document.querySelector("body");
body.style.background='pink';
body.style.color='blue';
body.style.fontSize=`${20}px`;
window.addEventListener("keypress",(e)=>{
    body.innerHTML=`
    <table border="1">
        <tr>
            <th>key</th>
            <th>code</th>
            <th>charcode</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.code}</td>
            <td>${e.charCode}</td>
        </tr>
    </table>
    `
    console.log(e);
});