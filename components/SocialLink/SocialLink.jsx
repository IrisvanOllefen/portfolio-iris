import Link from 'next/link'

export default function SocialLink({ socialName, socialLink }) {
  return (
    <li>
      <Link href={socialLink}>
        <a>{socialName}</a>
      </Link>
    </li>
  )
}
