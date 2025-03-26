import React from 'react';
import Image from 'next/image';

const Profile: React.FC = () => {
  return (
    <div className="flex flex-col items-center mb-12">
      <div className="w-40 h-40 rounded-full overflow-hidden mb-6 border-4 border-white/10 shadow-lg">
        <Image
          src="/images/profile.jpg"
          alt="Wolf Hopkins"
          width={160}
          height={160}
          className="object-cover w-full h-full"
        />
      </div>
      <h3 className="text-2xl font-semibold text-white mb-2">Wolf Hopkins</h3>
    </div>
  );
};

export default Profile; 