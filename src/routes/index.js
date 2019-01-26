import Profile from '../pages/profile'
import ContactMe from '../pages/contactme'
import Blogs from '../pages/blogs'

const routes=(props)=>[
    {url:'/',component:<Profile {...props}/>},
    {url:'/contactme',component:<ContactMe {...props}/>},
    {url:'/blogs',component:<Blogs {...props}/>},
]

export default routes
