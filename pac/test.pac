function FindProxyForURL(url, host) {
    if (host == 'music.163.com' || host == '*.music.163.com' || host == '*.v.163.com' || host == '*.music.126.net') {
        return 'PROXY 124.90.70.123:8085;'
    }
    return 'DIRECT;'
}
