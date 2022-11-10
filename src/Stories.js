import React from "react";

import { useGlobalContext } from "./context";

const Stories = () => {
	const { isLoading, hits, removeStory } = useGlobalContext();

	if (isLoading) {
		return <div className="loading"></div>;
	}
	return (
		<div className="stories">
			{hits.map((story) => {
				const {
					objectID,
					title,
					num_comments,
					url,
					points,
					author,
					created_at,
				} = story;
				return (
					<article key={objectID} className="story">
						<h4 className="title">{title}</h4>
						<p className="info">
							{points} points by <span>{author} | </span> {num_comments}{" "}
							comments | Date: {created_at.slice(0, 10)}
						</p>
						<div>
							<a
								href={url}
								className="read-link"
								target="_blank"
								rel="noopener noreferrer"
							>
								read more
							</a>
							<button
								className="remove-btn"
								onClick={() => removeStory(objectID)}
							>
								remove
							</button>
						</div>
					</article>
				);
			})}
		</div>
	);
};

export default Stories;
