import React from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer
} from 'recharts';
import { TrendingUp, Users, DollarSign, MousePointerClick } from 'lucide-react';

const data = [
  { name: 'Mon', leads: 40, sales: 24, amt: 2400 },
  { name: 'Tue', leads: 30, sales: 13, amt: 2210 },
  { name: 'Wed', leads: 20, sales: 58, amt: 2290 },
  { name: 'Thu', leads: 27, sales: 39, amt: 2000 },
  { name: 'Fri', leads: 68, sales: 48, amt: 2181 },
  { name: 'Sat', leads: 83, sales: 68, amt: 2500 },
  { name: 'Sun', leads: 94, sales: 73, amt: 2100 },
];

const StatCard = ({ icon: Icon, label, value, trend, color }: any) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2">
    <div className="flex items-center justify-between">
      <div className={`p-2 rounded-lg ${color} bg-opacity-10 text-brand-600 dark:text-brand-400`}>
        <Icon size={18} />
      </div>
      <span className="text-xs font-semibold text-brand-600 bg-brand-50 dark:bg-brand-900/30 px-2 py-0.5 rounded-full">
        {trend}
      </span>
    </div>
    <div>
      <h4 className="text-slate-500 dark:text-slate-400 text-xs font-medium uppercase tracking-wider">{label}</h4>
      <p className="text-xl font-bold text-slate-900 dark:text-white">{value}</p>
    </div>
  </div>
);

const DashboardPreview: React.FC = () => {
  return (
    <div className="relative mx-auto max-w-5xl transform hover:scale-[1.01] transition-transform duration-500">
      {/* Glassmorphism Container */}
      <div className="relative bg-white/60 dark:bg-slate-900/60 backdrop-blur-xl rounded-3xl border border-white/20 dark:border-slate-700/50 shadow-2xl p-6 sm:p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">Performance Overview</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400">Real-time pipeline analytics</p>
          </div>
          <div className="flex gap-2">
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-3 h-3 rounded-full bg-brand-500"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard icon={TrendingUp} label="Total Revenue" value="$124,500" trend="+12.5%" color="bg-brand-600" />
          <StatCard icon={Users} label="New Leads" value="1,284" trend="+8.2%" color="bg-brand-500" />
          <StatCard icon={MousePointerClick} label="Conversion" value="3.42%" trend="+1.1%" color="bg-sky-500" />
          <StatCard icon={DollarSign} label="Pipeline Value" value="$840k" trend="+24%" color="bg-indigo-500" />
        </div>

        {/* Chart */}
        <div className="h-[250px] w-full bg-white dark:bg-slate-800/50 rounded-2xl p-4 border border-slate-100 dark:border-slate-700">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={data}
              margin={{ top: 10, right: 10, left: 0, bottom: 0 }}
            >
              <defs>
                <linearGradient id="colorLeads" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#2563eb" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#2563eb" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#0ea5e9" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#0ea5e9" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} opacity={0.2} />
              <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} dy={10} />
              <YAxis axisLine={false} tickLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} />
              <Tooltip
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)' }}
                itemStyle={{ color: '#1e293b' }}
              />
              <Area type="monotone" dataKey="leads" stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              <Area type="monotone" dataKey="sales" stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>


    </div>
  );
};

export default DashboardPreview;