import  React, { Component } from 'react';
import './app.css';
import Chip from './chip';
import organizerImage from './img/organizer.svg';
import advisorImage from './img/advisor.svg';
import connectorImage from './img/connector.svg';
import doerImage from './img/doer.svg';
import dreamerImage from './img/dreamer.svg';
import originalImage from './img/original.svg';
import CarouselContainer from './CarouselContainer';
import Footer from './Footer';


class App extends Component {
  constructor() {
    super();
    this.state = {
      name : "John Doe",
      openInputField: false,
      collapsibleIndex: 0,
      accordionContent: [
        {active: false, index: 0, title: 'When Working Together', lists: ['Be direct', 'Respect Clay alone time', 'Ask directly what you need', 'Avoid small talk']},
        {active: true, index: 1, title: 'When Talking To John', lists: ['Be direct', 'Respect Clay alone time', 'Ask directly what you need', 'Avoid small talk']}
      ]
    }

    this.addNewField = this.addNewField.bind(this);
    this.closeForm = this.closeForm.bind(this);
    this.handleAccordion = this.handleAccordion.bind(this);
    this.closeAccordion = this.closeAccordion.bind(this);
  }

  addNewField(e) {
    e.preventDefault();
    this.setState({
      openInputField: true
    })
  }


  closeForm(e) {
    e.preventDefault();
    this.setState({
      openInputField: false
    })
  }

  handleAccordion(i) {
    if(this.state.accordionContent[i].index === i){
     this.setState({
      accordionContent: this.state.accordionContent.map(content => {
        return content.index === i ? content.active === true ? {...content, active: false}: {...content, active: true} : content
      })
     }) 
    }
  }
  closeAccordion(i) {
    console.log(i);
    this.setState({
      accordionContent: this.state.accordionContent.map(content => {
        return content.index === i ? {...content, active: false}: content
      })
    })
    console.log(this.state.accordionContent);
  }

  render() {
    const accordionArray = this.state.accordionContent;
    return (
    <div>
      <nav className="navigation-container">
        <div className="navigation-content">
          <div className="logo-title">Josh Technology Group</div>
            <ul className="navigation-links hide-mid-and-low">
              <li>
                <a className="active" href="#!">Play</a>
              </li>
              <li>
                <a href="#!">Explore</a>
              </li>
              <li>
                <a href="#!">Connect</a>
              </li>
              <li>
                <a href="#!">Apply</a>
              </li>
            </ul>
        </div>
      </nav>
      <div className="carousel-container">
        <CarouselContainer />
      </div>
      <div className="page-content page-section">
        <div className="profile-heading center-align">
          <h1>Your profile comparisson with <span className="text-highlight">{this.state.name}</span></h1>
        </div>
        <div className="container row">
          <div className="icons-container center-align">
            <div className="row" style={{padding: '0 30px'}}>
              <div className="icons-content">
                <h4 className="profile-title-text">You</h4>
                <div className='icon-container icon-container-1 icon-organizer'>
                  <img src={organizerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Organizer</p>

                <div className='icon-container icon-container-2 icon-doer'>
                  <img src={doerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Doer</p>
                <div className='icon-container icon-container-3 icon-advisor'>
                    <img src={advisorImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Organizer</p>

                <div className='icon-container icon-container-4 icon-original'>
                    <img src={originalImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Original</p>

                <div className='icon-container icon-container-5 icon-connector'>
                    <img src={connectorImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Connector</p>

                <div className='icon-container icon-container-6 icon-dreamer'>
                    <img src={dreamerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Dreamer</p>

              </div>
              
              <div className="icons-content">
                <h4>{this.state.name}</h4>
                <div className='icon-container icon-container-1 icon-dreamer'>
                  <img src={dreamerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Dreamer</p>

                <div className='icon-container icon-container-2 icon-organizer'>
                  <img src={organizerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Organizer</p>

                <div className='icon-container icon-container-3 icon-original'>
                  <img src={originalImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Original</p>

                <div className='icon-container icon-container-4 icon-advisor'>
                  <img src={advisorImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Advisor</p>

                <div className='icon-container icon-container-5 icon-connector'>
                  <img src={connectorImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Connector</p>

                <div className='icon-container icon-container-6 icon-doer'>
                  <img src={doerImage} alt="" className="icon" />
                </div>
                <p className="icon-text">Doer</p>
              </div>
            </div>
          </div>
          <div className="content-container">
            <div style={{paddingLeft: 40, paddingRight: 30}}>
              <h1 className="content-heading"><span className="title-color-1">ORGANIZER</span> + <span className="title-color-2">DREAMERS</span></h1>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam qui laudantium tempora. Tempora repellat dolorum nostrum molestias cum ipsam cumque sed exercitationem eos! Non sunt placeat sit autem ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum ullam qui laudantium tempora. Tempora repellat dolorum nostrum molestias cum ipsam cumque sed exercitationem eos! Non sunt placeat sit autem ad.</p>
              <div className="button-container">
                <div className="right-align">
                  <ul>
                    <li className="add-button-container"><button className="btn btn-transparent waves-effect icon-left-align" onClick={this.addNewField}><i className="material-icons">add</i>Add new</button></li>
                    <li><button className="btn btn-transparent icon-right-align" >Expand all <i className="material-icons">keyboard_arrow_down</i></button></li>
                  </ul>
                </div>
              </div>
              <div className={`input-field-container z-depth-1 ${this.state.openInputField ? 'open' : ''}`}>
                <form noValidate className="form-container">
                  <input type="text" placeholder="Enter Note Title" className="input-field-text"/>
                  <input type="textarea" placeholder="Enter details" className="input-textarea" />
                  <div className="action-button-container right-align">
                    <ul>
                      <li>
                          <button className="btn btn-transparent" onClick={this.closeForm}>Cancel</button>
                      </li>
                      <li>
                        <button className="btn btn-primary">Save</button>
                      </li>
                    </ul>
                  </div>
                </form>
              </div>
              <div className="card">
                <div className="card-content" ></div>
                  {
                    accordionArray.map( (data, index) => {
                      return <div className="collapsible-header z-depth-1" key={index}>
                          <div className="collapsible-heading" >
                            <div className="header-title" onClick={() =>  {this.handleAccordion(index)}}>{data.title}</div>
                            <i className="material-icons close-icon" onClick={() => {this.closeAccordion(index)}}>close</i>
                          </div>
                          <div className={`collapsible-body ${data.active ? 'open' : ''} `}>
                              <Chip lists={data.lists} readOnly = {false}/>
                            </div>
                        </div>
                    })
                  }
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
    
    );
  }
}


export default App;
