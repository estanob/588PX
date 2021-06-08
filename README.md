# 588PX

[Live Link](http://five88px.herokuapp.com/#/)

## Overview 
588px (clone of 500px) is a social media platform that allows users to share their photos with the world!
Give your photos a geo tag and keywords to increase exposure to other users and increase your pulse.
Build your professional photography portfolio with us and track your progress with our data insights.

## Technologies Used
* ReactJS
* Redux
* Ruby on Rails
* Amazon Web Services S3

## Features
* Followers, Following, and Creator Modal
* Responsive picture index that dynamically updates as pictures are uploaded
* Ability to upload, edit, and delete pictures
* Ability to create galleries and add pictures to them

## Highlights
### Creator Modal
![creator-modal-tab-smaller](https://user-images.githubusercontent.com/68726214/121224872-d3636980-c83d-11eb-8710-17857c732748.gif)
<br/>
Using React functional components and react hooks, this creator modal allows the user to view information of the uploader of a picture/creator of a gallery. The current user can see the follows, pictures and galleries of the other user. With the use of React hooks to set state, the content of the modal can be toggled, and styling will be changed accordingly as well.
```javascript
let [whichContent, setWhichContent] = useState('');
const modalContent = () => {
    if (whichContent === 'pics') {
        return (
            <ul className="crt-mdl-pics">
                {modalPics}
            </ul>
        )
    } else if (whichContent === 'gals') {
        return (
            <ul className="crt-mdl-gals">
                {modalGals}
            </ul>
        )
    } else if (whichContent === 'followers') {
        return (
            <ul className="crt-mdl-flrs">
                <h1>Followers:</h1>
                {owner.followers.length > 0 ? modalFollowers : <p>None</p>}
            </ul>
        )
    } else if (whichContent === 'following') {
        return (
            <ul className="crt-mdl-flrs">
                <h1>Following:</h1>
                {owner.followees.length > 0 ? modalFollowing : <p>None</p>}
            </ul>
        )
    } else {
        return ''
    }
}
```

```javascript
<div className='crt-mdl-follows'>
    <button className={whichContent === "followers" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('followers')}>
        {`${owner.followers.length} Followers`}&nbsp;
    </button>
    <button className={whichContent === "following" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('following')}>
        {`${owner.followees.length} Following`}
    </button>
    <button className={whichContent === "pics" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('pics')}>
        Pictures Toggle
    </button>
    <button className={whichContent === "gals" ? 'creator-tab-selected' : ''} onClick={() => setWhichContent('gals')}>
        Galleries Toggle
    </button>
</div>
```

### Dynamic Picture Index
![final-picture-index-smaller](https://user-images.githubusercontent.com/68726214/121225513-71573400-c83e-11eb-846b-1ae8a0d00a76.gif)
<br/>
The picture index is a react component that renders pictures through the React-Redux cycle. New pictures are added to the index upon successful upload. Each picture index item uses css flex and flex-wrap so that they are dynamically sized and will change according to the size of the window.

```javascript
render() {
    let { pictures, session } = this.props;
    pictures = pictures ? pictures : [];
    session = session ? session : '';
    let pics = pictures.map((pic, i) => {
      return (
        <li className="pic-index-item" key={i}>
          <PictureIndexItem 
            picture={pic}
            currentId={session} />
        </li>
      )
    })
    pics = pics.sort(() => Math.random() - 0.5);
    return(
      <div className='pic-index-container'>
        <ul className='pic-index'>{pics}</ul>
      </div>
    );
  };
```
