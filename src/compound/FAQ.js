import React from 'react'
import './FAQ.css'

export default function FAQ() {
    const faqs = [
        { question: 'How do I book an appointment?', answer: 'You can book an appointment by calling us at +1 123 456 7890 or visiting our online appointment page.' },
        { question: 'What are the hospital visiting hours?', answer: 'Visiting hours are from 8:00 AM to 8:00 PM every day.' },
      ];
  return (
    <div>
  

<section className="faqs">
  <h2>Frequently Asked Questions</h2>
  <div className="faqs-list">
    {faqs.map((faq) => (
      <div key={faq.question} className="faq-item">
        <h4>{faq.question}</h4>
        <p>{faq.answer}</p>
      </div>
    ))}
  </div>
</section>

    </div>
  )
}
