function FindProxyForURL(url, host) {
    if (host == 'music.163.com' || host == '*.music.163.com' || host == '*.v.163.com' || host == '*.music.126.net') {
        return 'PROXY proxy.tomatow.top:5005;'
    }
    return 'DIRECT;'
}
