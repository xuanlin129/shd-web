import React from 'react';
import styled from 'styled-components';
import company from '../config/company';
import theme from '../config/theme';
import { Row, Col, Form, Input, message } from 'antd';
import { Phone, Envelope, LocationDot, User } from 'styled-icons/fa-solid';
import { Line } from 'styled-icons/fa-brands';
import RipperButton from '../components/RipperButton';
import PageHeader from '../components/PageHeader';

function Contact() {
  const [form] = Form.useForm();
  const [loading, setLoading] = React.useState(false);

  const onFinish = async (values) => {
    setLoading(true);
    // 模擬 API 請求
    setTimeout(() => {
      console.log('Form Values:', values);
      message.success('我們已收到您的訊息，將盡快與您聯繫！');
      form.resetFields();
      setLoading(false);
    }, 1000);
  };

  return (
    <>
      <PageHeader
        title="聯絡我們"
        subtitle="若有任何產品需求或合作提案，歡迎填寫下方表單或直接來電，我們將竭誠為您服務。"
        bgText="CONTACT"
      />
      <Wrapper className="wrapper">
        <div className="container">
          <Row gutter={[{ xs: 24, md: 36, lg: 48 }, 48]} justify="center">
            {/* 左側：聯絡資訊 */}
            <Col xs={24} lg={10}>
              <InfoCard>
                <h3>聯絡資訊</h3>
                <div className="info-list">
                  <a
                    className="info-item"
                    href={`https://www.google.com/maps/search/?api=1&query=${company.name}`}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="icon">
                      <LocationDot size={20} />
                    </div>
                    <div className="text">
                      <label>地址</label>
                      <span>{company.address}</span>
                    </div>
                  </a>

                  <a className="info-item" href={`tel:${company.tel}`}>
                    <div className="icon">
                      <Phone size={20} />
                    </div>
                    <div className="text">
                      <label>電話</label>
                      <span>{company.tel}</span>
                    </div>
                  </a>

                  <a className="info-item" href={`mailto:${company.email}`}>
                    <div className="icon">
                      <Envelope size={20} />
                    </div>
                    <div className="text">
                      <label>電子信箱</label>
                      <span>{company.email}</span>
                    </div>
                  </a>

                  <a className="info-item" href={company.line} target="_blank" rel="noreferrer">
                    <div className="icon">
                      <Line size={20} />
                    </div>
                    <div className="text line-wrapper">
                      <label>Line</label>
                      <div className="line-content">
                        <img
                          src={`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${company.line}&color=${theme.primary.replace('#', '')}`}
                          alt="Line QR Code"
                          className="qr-code"
                        />
                        <div className="line-text">
                          <span>點擊加入好友</span>
                          <span className="line-id">或是掃描 QR Code</span>
                        </div>
                      </div>
                    </div>
                  </a>
                </div>

                <div className="map-container">
                  <iframe
                    title="Company Location"
                    src={`https://maps.google.com/maps?q=${company.name}&t=&z=15&ie=UTF8&iwloc=&output=embed`}
                    style={{ width: '100%', height: '100%', border: 0 }}
                    loading="lazy"
                    allowFullScreen
                  />
                </div>
              </InfoCard>
            </Col>

            <Col xs={24} lg={14}>
              <FormCard>
                <h3>線上諮詢</h3>
                <Form form={form} layout="vertical" onFinish={onFinish} size="large" requiredMark={false}>
                  <Row gutter={16}>
                    <Col xs={24} sm={12}>
                      <Form.Item name="name" label="您的稱呼" rules={[{ required: true, message: '請輸入您的稱呼' }]}>
                        <Input placeholder="王先生 / 陳小姐" prefix={<User size={16} color="#ccc" />} />
                      </Form.Item>
                    </Col>
                    <Col xs={24} sm={12}>
                      <Form.Item name="phone" label="聯絡電話" rules={[{ required: true, message: '請輸入聯絡電話' }]}>
                        <Input placeholder="0912-345-678" prefix={<Phone size={16} color="#ccc" />} />
                      </Form.Item>
                    </Col>
                  </Row>

                  <Form.Item
                    name="email"
                    label="電子信箱"
                    rules={[
                      { type: 'email', message: '請輸入有效的 Email 格式' },
                      { required: true, message: '請輸入電子信箱' },
                    ]}
                  >
                    <Input placeholder="example@email.com" prefix={<Envelope size={16} color="#ccc" />} />
                  </Form.Item>

                  <Form.Item name="message" label="諮詢內容" rules={[{ required: true, message: '請輸入諮詢內容' }]}>
                    <Input.TextArea
                      placeholder="請簡述您的需求，例如：產品材質、預計數量、特殊加工需求..."
                      rows={5}
                      showCount
                      maxLength={500}
                    />
                  </Form.Item>

                  <div className="submit-area">
                    <RipperButton onClick={() => form.submit()} disabled={loading} type="button">
                      {loading ? '傳送中...' : '確認送出'}
                    </RipperButton>
                  </div>
                </Form>
              </FormCard>
            </Col>
          </Row>
        </div>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.section`
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 60px;
    position: relative;
    z-index: 2; /* 確保內容在 Header 之上 */
  }
`;

const InfoCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  height: 100%;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;

  h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: #333;
    position: relative;
    padding-left: 16px;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      width: 4px;
      height: 24px;
      background: var(--primary-color);
      border-radius: 2px;
    }
  }

  .info-list {
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-bottom: 40px;
  }

  .map-container {
    margin-top: auto;
    width: 100%;
    height: 250px;
    border-radius: 12px;
    overflow: hidden;
    border: 1px solid #eee;
  }

  .info-item {
    display: flex;
    align-items: flex-start;
    gap: 16px;
    text-decoration: none;
    transition: transform 0.2s;

    &:hover {
      transform: translateX(5px);
    }

    .icon {
      width: 40px;
      height: 40px;
      background: var(--bg-light-color);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      color: var(--primary-color);
      flex-shrink: 0;
    }

    .text {
      display: flex;
      flex-direction: column;
      gap: 4px;

      label {
        font-size: 0.875rem;
        color: #888;
        cursor: pointer;
      }

      span {
        font-size: 1rem;
        color: #333;
        font-weight: 500;
        line-height: 1.5;
        word-break: break-all;
      }
    }

    .line-wrapper {
      flex: 1;

      .line-content {
        display: flex;
        gap: 16px;
        align-items: center;
        margin-top: 8px;

        .qr-code {
          width: 100px;
          height: 100px;
          border-radius: 8px;
        }

        .line-text {
          display: flex;
          flex-direction: column;
          gap: 4px;
        }
      }
    }
  }
`;

const FormCard = styled.div`
  background: #fff;
  padding: 40px;
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1.5rem;
    margin-bottom: 30px;
    color: #333;
    text-align: center;
  }

  .ant-form-item-label > label {
    font-size: 1rem;
    color: #555;
  }

  .ant-input,
  .ant-input-textarea textarea {
    border-radius: 8px;
    padding: 10px 12px;

    &:hover,
    &:focus {
      border-color: var(--primary-color);
    }
  }

  .ant-input-affix-wrapper {
    padding: 10px 12px;
    border-radius: 8px;

    &:hover,
    &:focus-within {
      border-color: var(--primary-color);
    }
  }

  .submit-area {
    margin-top: 32px;
    display: flex;
    justify-content: center;
  }
`;

export default Contact;
