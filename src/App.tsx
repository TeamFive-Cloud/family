import React from 'react';
import { HomeIcon } from 'lucide-react';
import { HomeCard } from './components/HomeCard';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center space-x-3">
            <HomeIcon className="w-8 h-8 text-indigo-600" />
            <h1 className="text-3xl font-bold text-gray-900">我家的住房变迁</h1>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          <HomeCard
        title="老家"
        period="2000 - 现在"
        description="童年的回忆没有那么让人难堪，但也没有那么温暖。"
        images={[
          {
            url: "../src/image/past/kitchen.jpg",
            description: "这是我童年的厨房，可以看到炉子和烧火用的木头。"
          },
          {
            url: "../src/image/past/pigsty.jpg",
            description: "原来的猪圈。"
          },
          {
            url: "../src/image/past/beehive.jpg",
            description: "这是一个蜂巢，上面还有一个鸟巢，希望里面有鸟，房子比野外更安全。"
          },
          {
            url: "../src/image/past/bedroom.jpg",
            description: "这是我童年的卧室，曾经在那张桌子上做作业。"
          }
        ]}
        mapUrl="https://uri.amap.com/marker?position=105.94,30.05"
        address="重庆市铜梁区高楼镇"
          />

          <HomeCard
        title="新居"
        period="2024 - 现在"
        description="这是我父母一生所追求的，一件属于自己的房子。按理说他们有了，但攀比的心永远停不下来。为虚荣而活着，我不置可否。"
        images={[
          {
            url: "../src/image/now/livingroom.jpg",
            description: "客厅，有种感觉，好像是家。"
          },
          {
            url: "../src/image/now/livingroom2.jpg",
            description: "客厅，有种感觉，好像是家。"
          },
          {
            url: "../src/image/now/mainbedroom.jpg",
            description: "相信我，现在还有很重的腻子粉味。"
          },
          {
            url: "../src/image/now/bedroom1.jpg",
            description: "次卧，看起来很小，也确实不大。"
          },
          {
            url: "../src/image/now/bedroom2.jpg",
            description: "次卧，卧喔窝我。"
          }
        ]}
        mapUrl="https://uri.amap.com/marker?position=106.08,29.84"
        address="重庆市铜梁区东城街道"
          />
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white border-t">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-gray-500">
            记录生活，珍藏回忆 © {new Date().getFullYear()}
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;