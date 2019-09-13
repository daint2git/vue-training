const posts = [
  {
    id: 1,
    title: 'sunt aut facere',
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  {
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
]

export function getPosts() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve({ data: { posts }, message: 'success' })
    }, 1500)
  })
}

export function getPostById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const post = posts.find(post => post.id === id)
      if (post) {
        resolve({ data: { post }, message: 'success' })
      } else {
        reject({ message: 'Post not found.' })
      }
    }, 1500)
  })
}
