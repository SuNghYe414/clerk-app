import { auth, currentUser } from '@clerk/nextjs/server'

export default async function HomePage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>Sign in to view this page</div>
  }

  const user = await currentUser()

  return (
    <div>
      <h1>Welcome to the 메뚜기월드</h1>
      <p>메뚜기월드에 오신걸 환영합니다</p>
      <p>반갑습니다, {user?.username}</p>
      <p>등록시간 : {user?.createdAt}</p>
    </div>
  )
}
