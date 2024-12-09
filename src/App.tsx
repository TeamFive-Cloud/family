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
            period="1980 - 2010"
            description="这是我们家族生活了几代人的老房子。砖木结构的二层楼，院子里种满了各种果树。每到夏天，树荫下总是孩子们玩耍的欢乐天地。虽然条件简陋，但充满了温暖的回忆。"
            images={[
              {
                url: "https://images.unsplash.com/photo-1625244724120-1fd1d34d00f6?auto=format&fit=crop&q=80",
                description: "老家的正门，古朴的红砖墙诉说着岁月的故事"
              },
              {
                url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80",
                description: "充满生机的后院，果树和菜园是儿时的乐园"
              },
              {
                url: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?auto=format&fit=crop&q=80",
                description: "温馨的客厅，是全家人欢聚的地方"
              }
            ]}
            mapUrl="https://images.unsplash.com/photo-1569336415962-a4bd9f69cd83?auto=format&fit=crop&q=80"
            address="湖南省长沙市岳麓区"
          />

          <HomeCard
            title="新居"
            period="2010 - 现在"
            description="搬入这套现代化的新房子标志着家庭生活质量的提升。宽敞明亮的空间，完善的配套设施，让生活更加舒适便利。阳台上种植的花草为城市生活增添了一抹绿意。"
            images={[
              {
                url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80",
                description: "现代简约风格的外观设计"
              },
              {
                url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&q=80",
                description: "明亮通透的客厅，让人心情舒畅"
              },
              {
                url: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&q=80",
                description: "生机盎然的阳台花园"
              }
            ]}
            mapUrl="https://images.unsplash.com/photo-1553290322-e4e8da394e45?auto=format&fit=crop&q=80"
            address="湖南省长沙市天心区"
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