"use client";
import React from "react";

const VideoSectionTest = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-neutral-50 to-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-open-sans font-bold text-3xl md:text-4xl lg:text-5xl text-[#6a5c27]">
              Teste - Vídeo Instagram
            </h2>
            <p className="font-source text-lg md:text-xl text-[#5f5f5e] max-w-2xl mx-auto">
              Apenas o vídeo, sem comentários e legendas
            </p>
          </div>

          {/* Video Container */}
          <div className="relative group">
            {/* Instagram Video Frame - Apenas o vídeo */}
            <div className="relative bg-gradient-to-br from-primary/10 to-gold/10 rounded-2xl overflow-hidden shadow-2xl border border-neutral-200">
              <iframe
                src="https://www.instagram.com/p/DKs4GYLBizT/embed/"
                title="Vídeo Instagram - Teyu Surf"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full aspect-[9/16] max-w-md mx-auto"
                style={{
                  border: 0,
                  borderRadius: "12px"
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSectionTest;
