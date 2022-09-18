import { Fragment, useEffect, useRef, useState } from 'react';
import Spinner from '../Layout/Spinner';
import Notification from '../ui/notification';
import classes from './contact-form.module.css';

function ContactForm() {
  const [isSending, setIsSending] = useState(false);
  const [notification, setNotification] = useState(null);
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  }, [notification]);

  const sendMessageHandler = async (e) => {
    e.preventDefault();
    if (isSending) {
      return;
    }
    setIsSending(true);
    const message = {
      email: emailRef.current.value,
      name: nameRef.current.value,
      message: messageRef.current.value,
    };

    try {
      const response = await fetch('/api/message', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(message),
      });
      const responseJson = await response.json();
      if (!responseJson.success) {
        throw new Error('There was an error');
      } else {
        setNotification({
          status: 'success',
          title: 'Contact form',
          message: 'Message sent',
        });
        emailRef.current.value = '';
        nameRef.current.value = '';
        messageRef.current.value = '';
      }
    } catch {
      setNotification({
        status: 'error',
        title: 'Contact form',
        message: 'There was an error please try again',
      });
    }
    setIsSending(false);
  };

  return (
    <Fragment>
      {isSending && (
        <div className="centered">
          <Spinner />
        </div>
      )}
      <section className={classes.contact}>
        <h1>How can I help you?</h1>
        <form className={classes.form} onSubmit={sendMessageHandler}>
          <div className={classes.controls}>
            <div className={classes.control}>
              <label htmlFor="email">Your Email</label>
              <input ref={emailRef} type="email" id="email" required />
            </div>
            <div className={classes.control}>
              <label htmlFor="name">Your Name</label>
              <input ref={nameRef} type="text" id="name" required />
            </div>
          </div>
          <div className={classes.control}>
            <label htmlFor="message">Your Message</label>
            <textarea
              ref={messageRef}
              id="message"
              rows="5"
              required
            ></textarea>
          </div>
          <div className={classes.actions}>
            <button type="submit">Send Message</button>
          </div>
        </form>
        {notification && (
          <Notification
            status={notification.status}
            title={notification.title}
            message={notification.message}
          />
        )}
      </section>
    </Fragment>
  );
}

export default ContactForm;
