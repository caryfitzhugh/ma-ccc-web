import React, { Component } from 'react';
import Modal from 'react-modal';
import {withCookies} from 'react-cookie';
import './welcome_modal.css';

Modal.setAppElement("#root");

class WelcomeModal extends Component {
  constructor() {
    super();
    console.log(this.props);
    this.state = {
      open_welcome_modal: true
    };
  }
  close_modal() {
    this.props.cookies.set('welcome_seen', true);
    this.setState({"open_welcome_modal": false});
  }

  render() {
    let seen_before = this.props.cookies.get('welcome_seen');

    return <Modal
      isOpen={this.state.open_welcome_modal && !seen_before}
      >
        <h1> Welcome </h1>
        <p>
      If there are, we all be dead. Well, I'm not saying I'd like to build a summer home here, but the trees are actually quite lovely. And YOU: friendless, brainless, helpless, hopeless! Do you want me to send you back to where you were? Unemployed, in Greenland? No, there is too much. Let me sum up. Buttercup is marry' Humperdinck in a little less than half an hour. So all we have to do is get in, break up the wedding, steal the princess, make our escape... after I kill Count Rugen. You seem a decent fellow... I hate to kill you. Naturally... but I find that Thibault cancels out Capa Ferro. Don't you?
        </p>
      <p> You have a great gift for rhyme. Well, is only way I can be satisfied. If I use my right... over too quickly. I do not mean to pry, but you don't by any chance happen to have six fingers on your right hand? You only think I guessed wrong! That's what's so funny! I switched glasses when your back was turned! Ha ha! You fool! You fell victim to one of the classic blunders - The most famous of which is "never get involved in a land war in Asia" - but only slightly less well-known is this: "Never go against a Sicilian when death is on the line"! Ha ha ha ha ha ha ha! Ha ha ha ha ha ha ha! Ha ha ha...</p>
      <p>Fuss, fuss... I think he like to scream at *us*. Don't worry, I won't let it go to my head. It's possible. I kill a lot of people. Oh, the sot has spoken. What happens to her is not truly your concern. I will kill her. And remember this, never forget this: when I found you, you were so slobbering drunk, you couldn't buy Brandy! Hear this now: I will always come for you. Unless the enemy has studied his Agrippa... which I have.</p>
      <p>They were both poisoned. I spent the last few years building up an immunity to iocane powder. Unless the enemy has studied his Agrippa... which I have. Move? You're alive. If you want I can fly. You just shook your head... doesn't that make you happy? Truly, you have a dizzying intellect. Probably he means no *harm*.</p>
        <div className='btn btn-block btn-primary' onClick={() => this.close_modal()}> Close </div>
      </Modal>
  }
}

export default withCookies(WelcomeModal);
