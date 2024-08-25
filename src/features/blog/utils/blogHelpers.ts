export const formatTime = (dateText: string) =>
  new Date(dateText).toLocaleDateString("en-GB");
