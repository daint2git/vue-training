const posts = {
  '1': {
    id: 1,
    title: 'sunt aut facere',
    body:
      'quia et suscipit suscipit recusandae consequuntur expedita et cum reprehenderit molestiae ut ut quas totam nostrum rerum est autem sunt rem eveniet architecto',
  },
  '2': {
    id: 2,
    title: 'qui est esse',
    body:
      'est rerum tempore vitae sequi sint nihil reprehenderit dolor beatae ea dolores neque fugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis qui aperiam non debitis possimus qui neque nisi nulla',
  },
}

export function getPostById(id, cb) {
  // fake an API request
  setTimeout(() => {
    const data = posts[id]
    if (data) {
      cb(null, data)
    } else {
      cb(new Error('Post not found.'))
    }
  }, 1000)
}
