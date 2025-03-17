import { useState } from 'react';

// Define a type for each FAQ item
type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  {
    question: 'Who is Forever Viral?',
    answer: 'Forever Viral is a franchise growth agency that helps businesses scale through strategic franchise development and content training, empowering small business owners to grow their brands and expand effectively.',
  },
  {
    question: 'What types of businesses can benefit from your franchise scaling services?',
    answer: 'Our franchise scaling services are designed for businesses that are ready to expand and want to replicate their successful model in new locations. Whether you are in retail, food service, or a service-based industry, if your business has a proven concept and a strong brand, we can help you scale through franchising.',
  },
  {
    question: 'How long does it take to see results from your content training programs?',
    answer: 'Results from our content training programs can vary depending on the commitment and consistency of the business owner. Some businesses see growth in just a few days. More commonly, it typically takes 3-6 months to see significant results as the content builds momentum and reaches a wider audience.',
  },
  {
    question: 'What makes Forever Viral different from other franchise growth agencies?',
    answer: 'Forever Viral combines both franchise development expertise and content marketing training in one comprehensive service. Unlike other agencies, we focus not only on helping you scale through franchising but also on empowering your business with the tools and skills to create compelling content that attracts customers and enhances your brand presence.',
  },
  {
    question: 'Do you offer ongoing support for franchisees after they’ve been onboarded?',
    answer: 'Yes, we offer continuous support for franchisees. Our services include training, marketing support, and operational assistance to ensure that every franchisee is equipped with the resources they need to succeed and maintain brand consistency.',
  },
  {
    question: 'Can small businesses without a franchise model still benefit from your services?',
    answer: 'Absolutely! Even if you are not ready to franchise, our content training and marketing strategies can still help your business grow. We focus on building strong digital marketing foundations that can drive engagement, increase sales, and set your business up for long-term success, whether you are planning to franchise or not.',
  },
];

export default function FaqDropdown() {
  const [activeQuestion, setActiveQuestion] = useState<string | null>(null);

  const toggleAnswer = (question: string) => {
    setActiveQuestion(activeQuestion === question ? null : question);
  };

  return (
    <div
      style={{
        maxWidth: '600px',
        margin: '0 auto',
        width: '100%',
      }}
    >
      {faqs.map((faq) => (
        <div 
          key={faq.question} 
          style={{ 
            marginBottom: '15px',
            border: '1px solid #ddd',
            borderRadius: '4px',
            overflow: 'hidden',
            width: '100%',
            boxShadow: activeQuestion === faq.question ? '0 4px 8px rgba(0, 0, 0, 0.1)' : 'none',
            transition: 'box-shadow 0.3s ease',
          }}
        >
          <button
            onClick={() => toggleAnswer(faq.question)}
            style={{
              width: '100%',
              padding: '15px',
              backgroundColor: activeQuestion === faq.question ? '#2980b9' : '#454545',
              color: 'white',
              border: 'none',
              textAlign: 'left',
              cursor: 'pointer',
              fontSize: '16px',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              transition: 'background-color 0.3s ease',
            }}
          >
            <span>{faq.question}</span>
            <span style={{ 
              transition: 'transform 0.3s',
              transform: activeQuestion === faq.question ? 'rotate(180deg)' : 'rotate(0)',
              fontSize: '18px',
            }}>
              ▼
            </span>
          </button>
          <div
            style={{
              maxHeight: activeQuestion === faq.question ? '1000px' : '0',
              overflow: 'hidden',
              transition: 'max-height 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275), padding 0.3s ease-in-out, opacity 0.4s ease',
              padding: activeQuestion === faq.question ? '15px' : '0 15px',
              backgroundColor: '#f9f9f9',
              width: '100%',
              opacity: activeQuestion === faq.question ? 1 : 0,
              transform: activeQuestion === faq.question ? 'translateY(0)' : 'translateY(-10px)',
              borderTop: activeQuestion === faq.question ? '1px solid #eaeaea' : 'none',
            }}
          >
            <p style={{ 
              margin: '0',
              transition: 'transform 0.4s ease, opacity 0.4s ease',
              transform: activeQuestion === faq.question ? 'translateY(0)' : 'translateY(-10px)',
              opacity: activeQuestion === faq.question ? 1 : 0,
             }}>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
}