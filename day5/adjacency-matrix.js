const G = []

const V = 5

for (let i = 0; i < V; i++) {
  for (let j = 0; j < V; j++) {
    if (!G[i]) G[i] = []
    G[i][j] = 0
  }
}

G[0][1] = 1
G[0][2] = 1
G[1][2] = 1
G[1][4] = 1

console.log('Adjacency Matrix: ', G)
