const fetch = require('node-fetch')

async function Test() {
  const res = await fetch('https://api.github.com/users/Kenny-Gin1/repos', {
    headers: { Accept: 'application/vnd.github.inertia-preview+json' },
  })
  const allData = await res.json()
  const relData = allData.map((el) => {
    return el
  })
  console.log('BEGINNING', relData)
  return {
    props: {
      allData,
    },
  }
}

Test()
