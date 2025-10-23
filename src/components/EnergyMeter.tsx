interface EnergyMeterProps {
  energy: number;
}

export const EnergyMeter = ({ energy }: EnergyMeterProps) => {
  const getEmoji = () => {
    if (energy < 30) return "😴";
    if (energy < 60) return "🙂";
    if (energy < 80) return "😃";
    return "🤯";
  };

  const getColor = () => {
    if (energy < 30) return "from-gray-400 to-gray-500";
    if (energy < 60) return "from-yellow-400 to-orange-500";
    if (energy < 80) return "from-orange-500 to-pink-500";
    return "from-pink-500 to-purple-600";
  };

  return (
    <div className="pt-4 border-t border-border">
      <label className="text-sm font-medium text-muted-foreground mb-3 block">
        Energy Score
      </label>
      <div className="space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-3xl" role="img" aria-label="energy-emoji">
            {getEmoji()}
          </span>
          <div className="text-right">
            <div className="text-2xl font-bold bg-gradient-to-r bg-clip-text text-transparent from-primary to-secondary">
              {energy}
            </div>
            <div className="text-xs text-muted-foreground">out of 100</div>
          </div>
        </div>
        <div className="h-3 bg-muted rounded-full overflow-hidden shadow-inner">
          <div
            className={`h-full bg-gradient-to-r ${getColor()} transition-all duration-500 ease-out rounded-full shadow-glow`}
            style={{ width: `${energy}%` }}
          />
        </div>
      </div>
    </div>
  );
};
