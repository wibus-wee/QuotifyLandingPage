import { useEffect, useState } from 'react';
import { initializePaddle, Paddle } from '@paddle/paddle-js';

const PADDLE_ENV = import.meta.env.VITE_PADDLE_ENV || 'sandbox';
const PADDLE_TOKEN = import.meta.env.VITE_PADDLE_TOKEN;

// 生产环境价格 ID
const PRODUCTION_PRICE_IDS =  {
  pro: 'pri_01jgekhn9d8w1fjdhd7a0s5h57',
};

// 产品价格 ID 配置
export const PRICE_IDS: Record<string, string> = PRODUCTION_PRICE_IDS;

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