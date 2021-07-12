import React from 'react';
import './menu-item.styles.scss';
import { withRouter } from 'react-router';
import { match } from 'esquery';

const MenuItem = ({
  title,
  imageUrl,
  size,
  linkUrl,
  history,
  match,
}) => (
  <div
    className={`${size} menu-item`}
    // no '/' in the middle of match.url and linkurl should be added, match.url contains /
    // /someMatchedUrl/linkUrl
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    ></div>
    <div className="content">
      <div className="title">{title.toUpperCase()}</div>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

// withRouter is a high order function which will power up the MenuItem component with access to history, match, location props
// without having to use a bad pattern called Prop Drilling or Prop Tunneling
export default withRouter(MenuItem);
