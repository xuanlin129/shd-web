import React from 'react';
import styled from 'styled-components';
import { Collapse } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import { Plus, Minus } from '@styled-icons/fa-solid';
import PageHeader from '../components/PageHeader';
import Contact from '../components/Home/Contact';

const faqData = [
  {
    question: '是否有最小接單量？',
    answer: '依產品與製程不同而定，歡迎提供圖面或樣品評估，我們將給予最合適建議。',
  },
  {
    question: '是否可協助打樣？',
    answer: '可配合少量打樣，實際費用與交期依加工內容另行報價。',
  },
  {
    question: '特殊顏色或客製需求可以嗎？',
    answer: '可，特殊色、指定粉料或客製需求請事前告知評估。',
  },
  {
    question: '交期大約多久？',
    answer: '依訂單數量與製程複雜度而定，一般案件約3-7個工作天。',
  },
  {
    question: '是否提供長期配合？',
    answer: '我們歡迎長期合作客戶，穩定訂單可協助優化單價與產線安排。',
  },
];

const items = faqData.map((item, index) => ({
  key: String(index + 1),
  label: (
    <div className="faq-question">
      <span className="prefix-q">Q{index + 1}</span>
      {item.question}
    </div>
  ),
  children: (
    <div className="faq-answer">
      <span className="prefix-a">A</span>
      {item.answer}
    </div>
  ),
}));

function Faq() {
  return (
    <>
      <PageHeader title="常見問題" bgText="FAQ" />
      <Wrapper>
        <div className="container">
          <StyledCollapse
            items={items}
            defaultActiveKey={['1']}
            expandIconPlacement="end"
            expandIcon={({ isActive }) =>
              isActive ? (
                <Minus size={20} style={{ color: isActive ? '#fff' : 'var(--primary-color)' }} />
              ) : (
                <Plus size={20} style={{ color: isActive ? '#fff' : 'var(--primary-color)' }} />
              )
            }
          />
        </div>
      </Wrapper>
      <Contact />
    </>
  );
}

const Wrapper = styled.section`
  padding: 80px 0;
  background-color: #f8f9fa;

  .container {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
  }
`;

const StyledCollapse = styled(Collapse)`
  && {
    background: transparent;
    border: none;

    .ant-collapse-item {
      background: #fff;
      border-radius: 8px !important;
      margin-bottom: 16px;
      border: 1px solid #e1e4e8;
      overflow: hidden;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.02);
      transition: all 0.3s ease;

      &:hover {
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
        border-color: var(--primary-color);
      }
    }

    .ant-collapse-item-active {
      border-color: var(--primary-color) !important;

      .ant-collapse-header {
        background: var(--primary-color) !important;
        border-radius: 0;
        color: #fff !important;

        .faq-question {
          color: #fff;

          .prefix-q {
            background: #fff;
            color: var(--primary-color);
          }
        }

        /* Force override expand icon color inside active header */
        .ant-collapse-arrow span {
          color: #fff !important;
        }
      }
    }

    .ant-collapse-header {
      background: #fff;
      padding: 20px 24px !important;
      font-size: 18px;
      font-weight: 600;
      color: #333;
      display: flex;
      align-items: center;
      transition: all 0.3s;

      .ant-collapse-header-text {
        flex: 1;
      }

      .faq-question {
        display: flex;
        align-items: center;
        gap: 12px;

        .prefix-q {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: var(--primary-color);
          color: #fff;
          border-radius: 50%;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          transition: all 0.3s;
        }
      }
    }

    .ant-collapse-panel {
      border-top: none;
      background-color: #fff;

      .ant-collapse-body {
        padding: 20px 24px !important;
      }

      .faq-answer {
        display: flex;
        gap: 16px;
        font-size: 16px;
        line-height: 2;
        color: #555;

        .prefix-a {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          background: #f0f2f5;
          color: #666;
          border-radius: 4px;
          font-family: 'Montserrat', sans-serif;
          font-weight: 700;
          font-size: 16px;
          flex-shrink: 0;
          margin-top: -2px;
        }
      }
    }
  }
`;

export default Faq;
