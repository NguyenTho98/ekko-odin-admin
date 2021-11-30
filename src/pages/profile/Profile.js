import { Fragment, useState, useEffect } from 'react'
import axios from 'axios'
import UILoader from '@components/ui-loader'
import ProfilePoll from './ProfilePolls'
import ProfileAbout from './ProfileAbout'
import ProfileChangePassword from './ProfileChangePassword'
import ProfilePosts from './ProfilePosts'
import ProfileHeader from './ProfileHeader'
import { Row, Col, Button } from 'reactstrap'
import ProfileTwitterFeeds from './ProfileTwitterFeeds'
import ProfileLatestPhotos from './ProfileLatestPhotos'
import ProfileSuggestedPages from './ProfileSuggestedPages'
import ProfileFriendsSuggestions from './ProfileFriendsSuggestions'
import Breadcrumbs from '@components/breadcrumbs'
import { Route } from "react-router-dom";
import '@styles/react/pages/page-profile.scss'

const Profile = () => {
  const [data, setData] = useState(null)
  const [block, setBlock] = useState(false)

  useEffect(() => {
    axios.get('/profile/data').then(response => setData(response.data))
  }, [])
  return (
    <Fragment>
      
      {data !== null ? (
        <div id='user-profile'>
          <Breadcrumbs breadCrumbTitle='Thông tin tài khoản'  />
          <Row>
            <Col sm='12'>
              <ProfileHeader data={data.header} />
            </Col>
          </Row>
          <section id='profile-info'>
            <Row>
              <Route path={"/profile/info"} component={ () => <ProfileAbout /> }/>
              <Route path={"/profile/change-password"} component={ProfileChangePassword} />
            </Row>
          </section>
        </div>
      ) : null}
    </Fragment>
  )
}

export default Profile
