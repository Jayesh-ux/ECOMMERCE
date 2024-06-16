import React, { useState } from 'react';
import axios from 'axios';
import { generateChecksum } from '../../utils/utils'; // Import the generateChecksum function

const PhonePePayment = ({ totalPrice }) => {
  const [loading, setLoading] = useState(false);

  const handlePayment = async () => {
    setLoading(true);

    try {
      const params = {
        amount: totalPrice * 100, // Amount in paise
        currency: 'INR',
        // Add other required parameters
      };

      const merchantId = 'PGTESTPAYUAT';
      const key = '099eb0cd-02cf-4e2a-8aca-3e6c6aff0399';
      const baseUrl = 'https://api-preprod.phonepe.com/apis/pg-sandbox';
      const checksum = generateChecksum(params, key);

      const headers = {
        'Content-Type': 'application/json',
        'X-Merchant-Id': merchantId,
        'X-Checksum': checksum,
      };

      const url = `${baseUrl}/payment/collect`;

      const response = await axios.post(url, params, { headers });
      console.log('PhonePe payment response:', response.data);
      // Handle the response and redirect the user to the payment gateway
    } catch (error) {
      console.error('Error occurred during PhonePe payment:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button className="px-12 py-A4 rounded-full bg-[#1ED760] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200" onClick={handlePayment} disabled={loading}>
        {loading ? 'Processing...' : 'Pay with PhonePe'}
      </button>
    </div>
  );
};

export default PhonePePayment;