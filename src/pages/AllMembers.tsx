
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import MemberModal from '@/components/MemberModal';

const AllMembers = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  // This will be manually updated with all members
  const allMembers = [
    {
      id: 1,
      name: "Sohal Raj",
      position: "Secretary",
      image: "/assets/team/Sohal.jpg",
      instagram: "@mono_chrome_05",
      linkedin: "linkedin.com/in/sohal-raj-53841b263/",
      bio: "Leading PHOTOG with 3+ years of experience in street photography."
    },
    {
      id: 2,
      name: "Naman Meena",
      position: "Additional Secretary",
      image: "/assets/team/Naman.jpg",
      instagram: "@zephyr0223",
      linkedin: "linkedin.com/in/namanmeena/",
      bio: "Chota Mota Photographer."
    },
    {
      id: 3,
      name: "Harshwardhan Memne",
      position: "Additional Secretary",
      image: "/assets/team/Harshwardhan.jpg",
      instagram: "@harshwardhan.dng",
      linkedin: "linkedin.com/in/harshwardhan-dng/",
      bio: "Capturing time in trails and tales,where long exposure meets the soul of the streets | Light Trail Photographer."
    },
    {
      id: 4,
      name: "Amey Joshi",
      position: "Joint Secretary",
      image: "/assets/team/Amey.jpg",
      instagram: "@amey.arw",
      bio: "Architecture and urban photography enthusiast."
    },

    {
      id: 5,
      name: "Aniket Agrawal",
      position: "Joint Secretary",
      image: "/assets/team/Aniket.jpg",
      instagram: "@aniket_._agrawal",
      linkedin: "linkedin.com/in/aniket-agrawal-a3061b278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bio: "Capturing stories one frame at a time | Street photographer ."
    },
    {
      id: 6,
      name: "Atul Sharma",
      position: "Joint Secretary",
      image: "/assets/team/Atul.jpg",
      instagram: "@atul_s2005",
      bio: "I See the world through my lens | wildlife photographer",
      linkedin: "linkedin.com/in/atul-sharma-25194527a/"
    },
    {
      id: 7,
      name: "Sai Chaithanya",
      position: "Joint Secretary",
      image: "/assets/team/Chaithanya.jpg",
      instagram: "@amateur.__.clicks",
      linkedin :"linkedin.com/in/sai-chaithanya-gorantla-4686b7321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      bio: "Fashion and portrait photography enthusiast."
    },

    // Add more members here as needed
    {
      id: 8,
      name: "Om Daddi",
      position: "Member",
      image: "/assets/team/om.jpg",
      instagram: "@_om_daddi_",
      linkedin:"linkedin.com/in/om-daddi-8a5a2b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
      bio: "Passionate about Wildlife and event photography."
    },
    {
      id: 9,
      name: "Neel Sane",
      position: "Member",
      image: "/assets/team/neel.jpg",
      instagram: "@superdudeneel",
      // linkedin:"linkedin.com/in/om-daddi-8a5a2b321?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app ",
      bio: "pursuit of light | wildlife photographer | landscape photographer"
    },

    // {
    //   id: 9,
    //   name: "Priya Nair",
    //   position: "Member",
    //   image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    //   instagram: "@priya.captures",
    //   bio: "Portrait and fashion photography enthusiast."
    // },

    // {
    //   id: 10,
    //   name: "Karan Singh",
    //   position: "Member",
    //   image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b",
    //   instagram: "@karan.vision",
    //   bio: "Street and documentary photographer."
    // },

    // {
    //   id: 11,
    //   name: "Meera Patel",
    //   position: "Member",
    //   image: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    //   instagram: "@meera.shots",
    //   bio: "Wildlife and macro photography specialist."
    // },

    // {
    //   id: 12,
    //   name: "Raj Kumar",
    //   position: "Member",
    //   image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    //   instagram: "@raj.focus",
    //   bio: "Architecture and urban photography lover."
    // },

    // {
    //   id: 13,
    //   name: "Aisha Khan",
    //   position: "Member",
    //   image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5",
    //   instagram: "@aisha.clicks",
    //   bio: "Event and candid photography expert."
    // }
  ];

  const positions = ['All', 'Secretary', 'Additional Secretary', 'Joint Secretary', 'Member'];
  const [selectedPosition, setSelectedPosition] = useState('All');

  const filteredMembers = selectedPosition === 'All' 
    ? allMembers 
    : allMembers.filter(member => member.position === selectedPosition);

  return (
    <div className="min-h-screen bg-photog-black">
      <Navbar />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-photog-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              All <span className="gradient-text">Members</span>
            </h1>
            <p className="text-photog-white/70 text-lg max-w-2xl mx-auto">
              Meet all the talented photographers who make PHOTOG IITR a creative powerhouse.
            </p>
          </div>
        </div>
      </section>

      {/* Position Filter */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {positions.map((position) => (
              <button
                key={position}
                onClick={() => setSelectedPosition(position)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedPosition === position
                    ? 'bg-gradient-to-r from-photog-gold to-photog-gold-light text-photog-black'
                    : 'bg-photog-gray/20 text-photog-white hover:bg-photog-gray/40 border border-photog-gray-light/20'
                }`}
              >
                {position}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Members Grid */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {filteredMembers.map((member, index) => (
              <div
                key={member.id}
                className="bg-photog-gray/20 backdrop-blur-sm border border-photog-gray-light/20 rounded-2xl p-6 cursor-pointer hover-lift group animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
                onClick={() => setSelectedMember(member)}
              >
                <div className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-photog-gold/20 group-hover:border-photog-gold/60 transition-all duration-300"
                  />
                  <h3 className="text-lg font-semibold text-photog-white mb-1">{member.name}</h3>
                  <p className="text-photog-gold font-medium text-sm mb-2">{member.position}</p>
                  <p className="text-photog-white/70 text-xs">{member.bio}</p>
                  <p className="text-photog-blue text-xs mt-2">{member.instagram}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Member Modal */}
      {selectedMember && (
        <MemberModal
          member={selectedMember}
          isOpen={!!selectedMember}
          onClose={() => setSelectedMember(null)}
        />
      )}

      <Footer />
    </div>
  );
};

export default AllMembers;
