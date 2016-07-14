@echo off
node C:\Users\iamhy_000\Documents\GitHub\freeSS\app.js
echo,
echo "Process Restart..."
tskill shadowsocks
start \Users\iamhy_000\Shadowsocks.exe
echo,
echo "Successfull!"
exit