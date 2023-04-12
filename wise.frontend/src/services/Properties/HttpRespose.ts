export default interface HttpRespose
{
    Ok: boolean;
    Title: string;
    Message: string;
    Data?: [];
    ReturnUrl?: string;
}