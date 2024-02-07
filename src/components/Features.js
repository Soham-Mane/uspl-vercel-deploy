import { CloudArrowUpIcon, LockClosedIcon, ServerIcon } from '@heroicons/react/20/solid'
import image from '../images/featuresImg.jpeg';
const features = [
  {
    name: 'Secure Trading Environment.',
    description:
    "Trade confidently with Ultimate Scaler's robust security—encrypted transactions as we assure you that your strategy will remain confidential.",
    icon: CloudArrowUpIcon,
  },
  
  {
    name: 'Real Time Data Collection.',
    description: 'Our advanced backend processes real-time data, guaranteeing users up-to-date information. Utilizing sophisticated algorithms, we identify patterns and trends, delivering precise and actionable insights.',
    icon: LockClosedIcon,
  },
  {
    name: 'Automated Trading Simplicity.',
    description: 'We create an Option Trading software (available on Mobile & Desktop), helping traders automate CALL or PUT options decisions for intra-day trading. Our advanced machine learning algorithms analyze historical and real-time market data, identifying candle and trend patterns to predict market movements. This empowers users to automate decision-making, potentially increasing profits. The USPL MOTA app simplifies trading, eliminating the need for technical expertise. Once personalized, MOTA handles all aspects of trading on autopilot. Users can easily monitor profits and losses using the MOTA software and their broker account. Enjoy stress-free auto trading on your Windows-based desktop/laptop with a reliable internet connection.' ,
    icon: ServerIcon,
  },
]

export default function Features() {
  return (
    <div className='w-[92vw]  mx-auto pt-[3rem] sm:w-[85vw] sm:px-[3rem] '>
 <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
  <div className="lg:pr-8 lg:pt-4">
    <div className="lg:max-w-lg">
      <h2 className="text-lg font-semibold leading-7 text-indigo-600">Trade faster</h2>
      <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">A better workflow</p>
      <p className="mt-6 text-lg leading-8 text-gray-600">
        Explore the power of <span className='text-black font-semibold'>Ultimate Scaler Private Limited</span> — where real-time data meets automated trading for a faster, more efficient trading workflow.
      </p>
      <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
        {features.map((feature) => (
          <div key={feature.name} className="relative pl-9">
            <dt className="inline font-bold text-gray-900 text-lg	">
              <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
              {feature.name}
            </dt>{' '}
            <dd className="inline text-lg">{feature.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  </div>
  <img
    src={image}
    alt="Product screenshot"
    className="w-full h-full  max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10"
  />
</div>

      </div>
    </div>
    </div>
   
  )
}
