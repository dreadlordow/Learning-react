const getData = async () => {
    const githubDataPromise = await fetch('https://api.github.com/users/k1r1l');
    const data = githubDataPromise.json()
    
    return data
}

export default getData