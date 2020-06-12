import { Form, Input, Button, Checkbox } from 'antd';

import Base from '../components/Base.js'

class Index extends React.Component {
  render() {
    return (
      <Base id='search'>
        <Form>
          <Form.Item label='nickname' name='nickname'><Input /></Form.Item>
          <Form.Item><Button type='primary' htmlType='submit'>검색</Button></Form.Item>
        </Form>
        <style jsx>{`
          #search {
            text-align: center;
          }
        `}</style>
      </Base>
    )
  }
}

/* <form id='search' action='user'>
          <label htmlFor='nickname'></label>
          <input type='text' id='nickname' name='nickname' placeholder='닉네임을 적어주세요...'></input>
          <input type='submit' value='검색'></input>
        </form> */

export default Index