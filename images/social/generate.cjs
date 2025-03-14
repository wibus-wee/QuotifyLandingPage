// 此脚本需要在Node.js环境下运行并安装sharp库
// 使用方法: 安装依赖 npm install sharp
// 然后运行: node generate.js

const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

async function generateOGImage() {
  try {
    // 读取原始图标
    const iconPath = path.join(__dirname, '../../icon.png');
    
    // 首先调整图标尺寸
    const resizedIcon = await sharp(iconPath)
      .resize(250, 250)
      .toBuffer();
    
    // 创建1200x630的背景（OG推荐尺寸）
    const ogImage = await sharp({
      create: {
        width: 1200,
        height: 630,
        channels: 4,
        background: { r: 17, g: 24, b: 39, alpha: 1 } // 深色背景
      }
    })
      .composite([
        {
          // 在背景中间放置调整过尺寸的图标
          input: resizedIcon,
          gravity: 'centre'
        }
      ])
      .png()
      .toBuffer();

    // 保存为OG图像
    await sharp(ogImage)
      .toFile(path.join(__dirname, 'og-image.png'));
    
    // 同样的图像用于Twitter
    await sharp(ogImage)
      .toFile(path.join(__dirname, 'twitter-image.png'));
    
    console.log('生成OG和Twitter图像成功!');
  } catch (error) {
    console.error('生成图像时出错:', error);
  }
}

generateOGImage(); 