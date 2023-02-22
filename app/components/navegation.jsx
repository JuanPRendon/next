import styles from './navegation.module.css'
import Link from "next/link"

const links =[{
  label: 'Home',
  route: '/'
},{
  label:'about',
  route: '/about'  
},{
  label: 'posts',
  route: '/posts'
}]

export function Navegation(){
    return(
        <header className={styles.header}>
        <nav> 
          <ul className={styles.navegation}>
            {links.map(({label, route})=>(
              <li key={route}>
                <Link href={route}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
    )
}