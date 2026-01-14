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

import { useLanguage } from '../context/LanguageContext';

const StatCard = ({ icon: Icon, label, value, trend, color, bgColor, iconColor }: any) => (
  <div className="bg-white dark:bg-slate-800 p-4 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 flex flex-col gap-2 transition-all duration-300 hover:shadow-md">
    <div className="flex items-center justify-between">
      <div className={`p-2.5 rounded-xl ${bgColor} ${iconColor}`}>
        <Icon size={20} strokeWidth={2.5} />
      </div>
      <span className={`text-xs font-bold px-2 py-0.5 rounded-full ${trend.startsWith('+') ? 'text-emerald-600 bg-emerald-50 dark:bg-emerald-900/30' : 'text-red-600 bg-red-50'}`}>
        {trend}
      </span>
    </div>
    <div>
      <h4 className="text-slate-500 dark:text-slate-400 text-[11px] font-bold uppercase tracking-wider mb-0.5">{label}</h4>
      <p className="text-xl font-black text-slate-900 dark:text-white tracking-tight">{value}</p>
    </div>
  </div>
);

const DashboardPreview: React.FC = () => {
  const { t } = useLanguage();

  const data = [
    { name: t('chart.mon'), leads: 40, sales: 24, amt: 2400 },
    { name: t('chart.tue'), leads: 30, sales: 13, amt: 2210 },
    { name: t('chart.wed'), leads: 20, sales: 58, amt: 2290 },
    { name: t('chart.thu'), leads: 27, sales: 39, amt: 2000 },
    { name: t('chart.fri'), leads: 68, sales: 48, amt: 2181 },
    { name: t('chart.sat'), leads: 83, sales: 68, amt: 2500 },
    { name: t('chart.sun'), leads: 94, sales: 73, amt: 2100 },
  ];

  return (
    <div className="relative mx-auto max-w-5xl transform hover:scale-[1.01] transition-transform duration-500">
      {/* Glassmorphism Container */}
      <div className="relative bg-white/80 dark:bg-slate-900/80 backdrop-blur-2xl rounded-[2.5rem] border border-white/50 dark:border-slate-700/50 shadow-2xl p-6 sm:p-8">

        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div className="text-left">
            <h3 className="text-lg font-bold text-slate-900 dark:text-white">{t('dashboard.title')}</h3>
            <p className="text-sm text-slate-500 dark:text-slate-400 font-medium">{t('dashboard.subtitle')}</p>
          </div>
          <div className="flex gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-slate-200 dark:bg-slate-700"></div>
            <div className="w-2.5 h-2.5 rounded-full bg-brand-500"></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <StatCard
            icon={TrendingUp}
            label={t('dashboard.stat.revenue')}
            value="$124,500"
            trend="+12.5%"
            bgColor="bg-blue-50 dark:bg-blue-900/20"
            iconColor="text-blue-600 dark:text-blue-400"
          />
          <StatCard
            icon={Users}
            label={t('dashboard.stat.leads')}
            value="1,284"
            trend="+8.2%"
            bgColor="bg-indigo-50 dark:bg-indigo-900/20"
            iconColor="text-indigo-600 dark:text-indigo-400"
          />
          <StatCard
            icon={MousePointerClick}
            label={t('dashboard.stat.conversion')}
            value="3.42%"
            trend="+1.1%"
            bgColor="bg-sky-50 dark:bg-sky-900/20"
            iconColor="text-sky-600 dark:text-sky-400"
          />
          <StatCard
            icon={DollarSign}
            label={t('dashboard.stat.pipeline')}
            value="$840k"
            trend="+24%"
            bgColor="bg-violet-50 dark:bg-violet-900/20"
            iconColor="text-violet-600 dark:text-violet-400"
          />
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
              <Area type="monotone" dataKey="leads" name={t('chart.leads')} stroke="#2563eb" strokeWidth={3} fillOpacity={1} fill="url(#colorLeads)" />
              <Area type="monotone" dataKey="sales" name={t('chart.sales')} stroke="#0ea5e9" strokeWidth={3} fillOpacity={1} fill="url(#colorSales)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>


    </div>
  );
};

export default DashboardPreview;