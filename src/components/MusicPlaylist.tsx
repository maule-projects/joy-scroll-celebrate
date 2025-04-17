
import { useInView } from 'react-intersection-observer';
import { Music } from 'lucide-react';

const MusicPlaylist = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  // Spotify playlist link
  const spotifyPlaylistLink = "https://open.spotify.com/playlist/0Hso8KVAmHzyxyH7vbsw9Z?si=Kz5duYf-QxuhL5jpzwTh3A&pi=SfIXICoaRtuBk";

  return (
    <section id="music-playlist" ref={ref} className="scroll-section bg-gray-100">
      <h2 className={`section-title text-birthday-blue transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        This Playlist Sounds Like Us
      </h2>
      
      <div className={`w-full max-w-2xl mx-auto transition-all duration-1000 delay-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}>
        <div className="bg-white rounded-lg shadow-xl overflow-hidden">
          <div className="relative">
            <img 
              src="https://source.unsplash.com/random/800x600?music" 
              alt="Playlist Cover" 
              className="w-full h-60 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
              <div className="flex items-center mb-2">
                <Music size={24} className="mr-2" />
                <h3 className="text-2xl font-bold">Birthday Vibes</h3>
              </div>
              <p className="text-sm opacity-80">A playlist curated just for you</p>
            </div>
          </div>
          
          <div className="p-6">
            <p className="text-gray-600 mb-6">
              I've put together songs that remind me of our favorite memories together. 
              Each track has a special meaning that celebrates our friendship.
            </p>
            
            <div className="space-y-4">
              <div className="rounded-lg bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium">Dancing Queen</h4>
                  <p className="text-sm text-gray-500">ABBA</p>
                </div>
                <span className="text-sm text-gray-500">3:52</span>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium">Happy</h4>
                  <p className="text-sm text-gray-500">Pharrell Williams</p>
                </div>
                <span className="text-sm text-gray-500">3:53</span>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium">Don't Stop Me Now</h4>
                  <p className="text-sm text-gray-500">Queen</p>
                </div>
                <span className="text-sm text-gray-500">3:29</span>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium">Good as Hell</h4>
                  <p className="text-sm text-gray-500">Lizzo</p>
                </div>
                <span className="text-sm text-gray-500">2:39</span>
              </div>
              
              <div className="rounded-lg bg-gray-50 p-4 flex justify-between items-center hover:bg-gray-100 transition-colors">
                <div>
                  <h4 className="font-medium">Beautiful Day</h4>
                  <p className="text-sm text-gray-500">U2</p>
                </div>
                <span className="text-sm text-gray-500">4:06</span>
              </div>
            </div>
            
            <div className="mt-6">
              <a 
                href={spotifyPlaylistLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-green-500 text-white text-center rounded-lg font-medium hover:bg-green-600 transition-colors"
              >
                Open in Spotify
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicPlaylist;
