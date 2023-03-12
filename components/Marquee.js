export default function Marquee() {
  return (
    <a href="#">
        <div class="relative flex overflow-x-hidden bg-gradient-to-r from-green-500 to-blue-500">
          <div class="py-12 animate-marquee whitespace-nowrap">
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
          </div>
          <div class="absolute top-0 py-12 animate-marquee2 whitespace-nowrap">
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
            <span class="text-2xl mx-8">Start your free trial here</span>
          </div>
        </div>
    </a>
  );
}
