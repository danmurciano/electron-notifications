import React, { useState } from "react";
import { Form, Button } from 'react-bootstrap';

export default function NotificationForm() {
  const initialForm = {
    title: "",
    body: "",
  }

  const [formData, setFormData] = useState(initialForm);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData(data => ({
      ...data, [name]: value
    }));
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    new Notification(formData.title, { body: formData.body });
    setFormData(initialForm);
  }

  const triggerTemplateNotification = (evt) => {
    new Notification("New updates are available!", { body: "Visit the App store to download." });
  }

  return (
    <div class="notification-form">
      <h4 className="mb-4"> Create custom notification </h4>
      <Form className="NewBoxForm" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Notification Title</Form.Label>
          <Form.Control
            name="title"
            value={formData.title}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Notification Body</Form.Label>
          <Form.Control
            name="body"
            value={formData.body}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Button type="submit">Submit</Button>
        </Form.Group>
      </Form>

      <Button className="template-btn" variant="danger" onClick={triggerTemplateNotification}>Trigger Template Notification</Button>
    </div>
  );
}
