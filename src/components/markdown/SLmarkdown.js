import React, {Component} from 'react'
import ReactMarkdown from 'react-markdown'
import termsFrPath from '../../test.md'
import {Row, Col} from 'antd';
import './markdown.less'

class Terms extends Component {
    constructor(props) {
        super(props);

        this.state = {terms: null}
    }

    componentWillMount() {
        fetch(termsFrPath).then((response) => response.text()).then((text) => {
            this.setState({terms: text})
        })
    }

    render() {
        return (
            <div className="content">
                <Row>
                    <Col span={12} offset={6}>
                        <ReactMarkdown className={'markdown'} source={this.state.terms} escapeHtml={false}/>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Terms