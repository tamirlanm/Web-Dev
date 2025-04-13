from rest_framework import serializers
from .models import Company, Vacancy

class CompanySerializer(serializers.ModelSerializer):
    class Meta: 
        model = Company
        fields = ('id', 'name', 'description', 'city', 'address')

class VacancySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only = True)
    name = serializers.CharField(max_length = 255)
    description = serializers.CharField()
    salary = serializers.FloatField()
    company = serializers.PrimaryKeyRelatedField(queryset = Company.objects.all())

    def create(self, validated_data):
        return Vacancy.objects.create(**validated_data)
    
    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.description = validated_data.get('description', instance.description)
        instance.salary = validated_data.get('salary', instance.salary)
        instance.company = validated_data.get('company', instance.company)
        instance.save()
        return instance


'''
class VacancySerializer(serializers.ModelSerializer):
    company_name = serializers.ReadOnlyField(source = 'company.name')   
    
    class Meta:
        model = Vacancy
        fields = ('id', 'name', 'description', 'salary', 'company', 'company_name')
'''

