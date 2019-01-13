import React from 'react'
import { Link } from 'gatsby'
import globals from '../../globals/globals.module.scss'
import styles from './post-preview.module.scss'

export const PostPreview = props => {
	const externalLink = props.externalLink
	if (externalLink) {
		return (
			<a
				href={props.externalLink}
				style={{ textDecoration: `none`, color: `inherit` }}
				target="_blank"
				rel="noopener noreferrer"
			>
				<div className={styles.postPreview}>
					<h2 className={styles.title}>
						<span className={globals.hl}>{props.title}</span>
						<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.2 12.2">
							<path d="M5.7 0v1.5h4L4.5 6.7l1 1.1 5.3-5.2v3.9h1.4V0z" />
							<path fill="none" d="M3.4 6.7l3-2.9H1.5v7h7V5.9l-3 2.9z" />
							<path d="M8.5 5.9v4.9h-7v-7h4.9l1.5-1.6H0v10h10V4.4z" />
						</svg>
					</h2>
					<time className={styles.date} dateTime={props.date}>
						{props.date}
					</time>
					<div className={styles.content}>{props.excerpt}</div>
				</div>
			</a>
		)
	} else {
		return (
			<Link to={props.to} style={{ textDecoration: `none`, color: `inherit` }}>
				<div className={styles.postPreview}>
					<h2 className={styles.title}>
						<span className={globals.hl}>{props.title}</span>
					</h2>
					<time className={styles.date} dateTime={props.date}>
						{props.date}
					</time>
					<div className={styles.content}>{props.excerpt}</div>
				</div>
			</Link>
		)
	}
}
