def pickMGifts(m, arr):
    arr.sort()
    m_n = []
    for i in range(0, len(arr)-m+1):
        m_n.append(arr[i+m-1]-arr[i])
    return min(m_n)