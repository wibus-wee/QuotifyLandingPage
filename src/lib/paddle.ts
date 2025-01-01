import { useEffect, useState } from 'react';
import { initializePaddle, Paddle } from '@paddle/paddle-js';

const PADDLE_ENV = import.meta.env.VITE_PADDLE_ENV || 'sandbox';
const PADDLE_TOKEN = import.meta.env.VITE_PADDLE_TOKEN;

// 沙盒环境价格 ID
const SANDBOX_PRICE_IDS = {
  basic: 'pri_01jggb5vrewpz9jn4tqavw9sv6',
  pro: 'pri_01jggb6ascamsv1zeg38gsqesr',
};

// 生产环境价格 ID
const PRODUCTION_PRICE_IDS =  {
  basic: 'pri_01jgekhn9d8w1fjdhd7a0s5h57',
  pro: 'pri_01jgekj68wdx8jp4qv8bs78fq9',
};

// 产品价格 ID 配置
export const PRICE_IDS: Record<string, string> = PADDLE_ENV === 'sandbox' ? SANDBOX_PRICE_IDS : PRODUCTION_PRICE_IDS;

export function usePaddle() {
  const [paddle, setPaddle] = useState<Paddle>();

  useEffect(() => {
    initializePaddle({
      environment: PADDLE_ENV as 'sandbox' | 'production',
      token: PADDLE_TOKEN,
    }).then((paddleInstance: Paddle | undefined) => {
      if (paddleInstance) {
        setPaddle(paddleInstance);
      }
    });
  }, []);

  const openCheckout = (priceId: string) => {
    if (!paddle) {
      console.error('Paddle is not initialized');
      return;
    }

    paddle.Checkout.open({
      items: [{ priceId, quantity: 1 }],
    });
  };

  return { paddle, openCheckout };
} 